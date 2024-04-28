import { Text as RNText, StyleSheet, TextProps } from "react-native";

const styles = StyleSheet.create({
  default: {
    color: "#fff",
  },
});

export const Text = ({ children, ...rest }: TextProps) => {
  return (
    <RNText style={styles.default} {...rest}>
      {children}
    </RNText>
  );
};
