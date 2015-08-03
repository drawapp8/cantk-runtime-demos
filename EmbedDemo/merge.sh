GAMERUNNER=../GameRunner/platforms/android


cp -rvf $GAMERUNNER/libs .
cp -rvf $GAMERUNNER/src/* src/.
cp -arvf $GAMERUNNER/res/xml res
cp -arvf $GAMERUNNER/assets/www assets/
cp -rfv $GAMERUNNER/CordovaLib/src/* src/.


