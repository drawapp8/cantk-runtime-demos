# cantk-runtime-demos
demos for cantk runtime

# How Does NutRush Created

```
phonegap create NutRush "com.tangide.nutrush" "NutRush"
cd NutRush/
find -name screen\*.png -exec rm -f {} \;
rm www/* -rf
cd www
unzip ../../tangide/nutrush.zip
cd ..
phonegap plugin add https://github.com/drawapp8/cantk-runtime.git
phonegap prepare android -d
cp ../icon.png ./platforms/android/res/drawable/icon.png
```

# How Does RedHat Created

```
phonegap create RedHat "com.tangide.redhat" "RedHat"
cd RedHat/
find -name screen\*.png -exec rm -f {} \;
rm www/* -rf
cd www
unzip ../../tangide/redhat.zip
cd ..
phonegap plugin add https://github.com/drawapp8/cantk-runtime.git
phonegap prepare android -d
cp ../icon.png ./platforms/android/res/drawable/icon.png
```

# Build and Install
```
phonegap build android -d
adb install -r platforms/android/ant-build/CordovaApp-debug.apk
```
