# slick-sizer-ui

**"Let's make your mobile app responsive😍!"**  

Are you tired of dealing with different device dimensions in your mobile app development?  
Look no further! ***slick-sizer-ui*** is here to save the day. This library calculates your mobile or   tablet device dimensions and provides you with three handy functions: ***slickHeight, slickWidth** and   **slickFontSize**. Whether you're developing for Android or iOS, with or without a notch, this library   has got you covered! 📱🙌  

## Compatible with Expo & React Native Apps📱

We have verified this works with both type of native apps🔥. This works with notch and without notch devices. you dont have worry about it. just use it🙌🔥

## installation and usages

### using npm

```javascript 
npm i slick-sizer-ui
```

### using yarn

```javascript 
yarn add slick-sizer-ui
```

### usages

- **_slickHeight_** - works with vertical dimensions(height) of your phone📱  
```javascript
import { slickHeight } from "slick-sizer-ui";

const myComponentStyles = StyleSheet.create({
  container: {
    height: slickHeight(30), // 30% of the mobile screen height
  },
});
```

* **_slickWidth_** - works with horizontal dimensions(width) of your phone📱  
```javascript
import { slickWidth } from "slick-sizer-ui";

const myComponentStyles = StyleSheet.create({
  container: {
    width: slickWidth(50), // 50% of the mobile screen width
  },
});

```

- **_slickFontSize_** - works automatically as per requirtement. if your phone ***width < height*** then it takes width%. if not then it take height% for fontSize.  
```javascript
import { slickFontSize } from "slick-sizer-ui";

const myComponentStyles = StyleSheet.create({
  textStyle: {
    fontSize: slickFontSize(5), // 5% of the screen width/height (depending on which is less)
  },
});

```

## code example

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { slickHeight, slickWidth, slickFontSize } from "slick-sizer-ui";

export const Example = () => {
  // Your code logic here

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Mobile App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: slickHeight(30), // 30% of the mobile screen height
    width: slickWidth(30), // 30% of the mobile screen width
  },
  textStyle: {
    fontSize: slickFontSize(5), // 5% of the screen width/height (depends on which is less)
  },
});
```

### Now you're all set to create responsive mobile apps with ease using slick-sizer-ui😀. Thank you for choosing our library! 🙌

### Feel free to explore and experiment with these functions to make your app truly responsive and user-friendly. Enjoy coding! 😊🚀  

---
For more details and access to the source code, visit the [GitHub Repository](https://github.com/ShubhamBade/slick-sizer-ui).
