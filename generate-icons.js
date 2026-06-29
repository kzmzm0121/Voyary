const sharp = require("sharp");
const pngToIco = require("png-to-ico").default;
const fs = require("fs");
const path = require("path");

const source = "assets/voyary-icon.png";

const sizes = [
  48,
  72,
  96,
  128,
  144,
  152,
  167,
  180,
  192,
  256,
  384,
  512,
  1024
];

(async () => {
  try {

    if (!fs.existsSync(source)) {
      console.log("❌ assets/voyary-icon.png が見つかりません");
      process.exit(1);
    }

    console.log("🚀 Voyary Icon Generator");
    console.log("");

    for (const size of sizes) {

      const output = `assets/icon-${size}.png`;

      await sharp(source)
        .resize(size, size)
        .png()
        .toFile(output);

      console.log(`✅ ${size}x${size}`);
    }

    const favicon = await pngToIco([
      "assets/icon-48.png"
    ]);

    fs.writeFileSync("assets/favicon.ico", favicon);

    console.log("");
    console.log("🎉 完了しました！");
    console.log("");
    console.log("生成されたファイル");
    console.log("------------------------");

    sizes.forEach(size=>{
      console.log(`icon-${size}.png`);
    });

    console.log("favicon.ico");

  } catch(err){

    console.error(err);

  }

})();
