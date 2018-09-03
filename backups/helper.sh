#! /bin/sh

echo "reset modoule config ..."

echo "copy EditorCardItem.js"
cp EditorCardItem.js ../node_modules/zan-design/lib/components/common/editor-card/EditorCardItem.js

echo "copy goods.js"
cp goods.js ../node_modules/zan-choose-dialog/lib/config/goods.js


echo "copy GoodsEditor.js"
 cp GoodsEditor.js ../node_modules/zan-design/lib/components/goods/GoodsEditor.js
# cp light-raw-theme.js ../../node_modules/material-ui/src/styles/raw-themes/light-raw-theme.js

echo "copy index.js"
cp index.js ../node_modules/zan-design/lib/components/common/goods-style-editor/index.js


echo "copy TitleEditor.js"
cp TitleEditor.js ../node_modules/zan-design/lib/components/title/TitleEditor.js

echo "copy goods-tag.js"
cp goods-tag.js ../node_modules/zan-choose-dialog/lib/config/goods-tag.js

echo "copy GoodsListEditor.js"
cp GoodsListEditor.js ../node_modules/zan-design/lib/components/goods-list/GoodsListEditor.js


echo "done!"

