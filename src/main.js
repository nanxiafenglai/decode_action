import fs from 'fs';
import process from 'process';
import prettier from 'prettier';

// Dynamically import ESM modules
const commonModule = await import('./plugin/common.js');
const jjencodeModule = await import('./plugin/jjencode.js');
const sojsonModule = await import('./plugin/sojson.js');
const sojsonv7Module = await import('./plugin/sojsonv7.js');
const obfuscatorModule = await import('./plugin/obfuscator.js');
const awscModule = await import('./plugin/awsc.js');
const jsconfuserModule = await import('./plugin/jsconfuser.js');

// Provide default exports if necessary
const PluginCommon = commonModule.default || commonModule;
const PluginJjencode = jjencodeModule.default || jjencodeModule;
const PluginSojson = sojsonModule.default || sojsonModule;
const PluginSojsonV7 = sojsonv7Module.default || sojsonv7Module;
const PluginObfuscator =
  obfuscatorModule.default || obfuscatorModule;
const PluginAwsc = awscModule.default || awscModule;
const PluginJsconfuser =
  jsconfuserModule.default || jsconfuserModule;

// Default input and output files
let encodeFile = 'input.js';
let decodeFile = 'output.js';

// Read command-line arguments
for (let i = 2; i < process.argv.length; i++) {
  const argument = process.argv[i];

  if (argument === '-i') {
    if (!process.argv[i + 1]) {
      throw new Error('参数 -i 缺少输入文件路径');
    }

    encodeFile = process.argv[++i];
  } else if (argument === '-o') {
    if (!process.argv[i + 1]) {
      throw new Error('参数 -o 缺少输出文件路径');
    }

    decodeFile = process.argv[++i];
  } else {
    console.warn(`忽略未知参数：${argument}`);
  }
}

console.log(`输入: ${encodeFile}`);
console.log(`输出: ${decodeFile}`);

// Check input file
if (!fs.existsSync(encodeFile)) {
  throw new Error(`输入文件不存在：${encodeFile}`);
}

// Read source code
const sourceCode = fs.readFileSync(encodeFile, {
  encoding: 'utf-8'
});

let processedCode = sourceCode;
let pluginUsed = '';

// Try plugins in sequence
const plugins = [
  { name: 'obfuscator', plugin: PluginObfuscator },
  { name: 'sojsonv7', plugin: PluginSojsonV7 },
  { name: 'sojson', plugin: PluginSojson },
  { name: 'jsconfuser', plugin: PluginJsconfuser },
  { name: 'awsc', plugin: PluginAwsc },
  { name: 'jjencode', plugin: PluginJjencode },
  { name: 'common', plugin: PluginCommon }
];

/**
 * Determine whether a plugin made a meaningful code change.
 *
 * Formatting both versions with Prettier prevents whitespace,
 * indentation and line-break changes from being treated as decoding.
 */
function hasMeaningfulChange(beforeCode, afterCode) {
  if (typeof afterCode !== 'string' || !afterCode.trim()) {
    return false;
  }

  try {
    const normalizedBefore = prettier.format(beforeCode, {
      parser: 'babel'
    });

    const normalizedAfter = prettier.format(afterCode, {
      parser: 'babel'
    });

    return normalizedBefore !== normalizedAfter;
  } catch (error) {
    console.warn(
      `代码标准化比较失败，将使用原始文本比较：${error.message}`
    );

    return beforeCode !== afterCode;
  }
}

// Try each plugin until a meaningful change is detected
for (const { name, plugin } of plugins) {
  try {
    if (typeof plugin !== 'function') {
      throw new TypeError(`插件 ${name} 没有导出可调用函数`);
    }

    console.log(`正在尝试插件：${name}`);

    // Supports synchronous and asynchronous plugins
    const code = await plugin(sourceCode);

    if (typeof code !== 'string' || !code.trim()) {
      console.warn(`插件 ${name} 未返回有效代码，继续尝试。`);
      continue;
    }

    if (hasMeaningfulChange(sourceCode, code)) {
      processedCode = code;
      pluginUsed = name;

      console.log(`插件 ${name} 对代码进行了有效处理。`);
      break;
    }

    if (code !== sourceCode) {
      console.log(
        `插件 ${name} 只改变了格式，没有实质解密，继续尝试。`
      );
    } else {
      console.log(`插件 ${name} 未改变代码，继续尝试。`);
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : String(error);

    console.error(`插件 ${name} 处理时发生错误：${message}`);
  }
}

// Write only when a plugin made a meaningful change
if (processedCode !== sourceCode && pluginUsed) {
  const header = [
    '// 要你管？',
    '// 本文件由 decode-js 自动生成',
    '// 请勿手动修改'
  ].join('\n');

  const outputCode = `${header}\n${processedCode}`;

  fs.writeFileSync(decodeFile, outputCode, {
    encoding: 'utf-8'
  });

  console.log(
    `使用插件 ${pluginUsed} 成功处理并写入文件 ${decodeFile}`
  );
} else {
  console.error(
    '解密失败：所有插件均未能对输入代码进行实质处理。'
  );

  process.exitCode = 1;
}
