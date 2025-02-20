import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Motorbike from "../../assets/icons/motorbike.svg";

import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { RouteParamsList } from "../../routes";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function SuccessPage() {
  const navigation = useNavigation<RouteParamsList>();

  return (
    <SafeAreaView
      style={{ backgroundColor: THEME.COLORS.BASE.GRAY_500, flex: 1 }}
    >
      <View style={styles.container}>
        <Animated.View
          entering={SlideInLeft.duration(1000)}
          exiting={SlideOutRight.duration(1000)}
          style={{ marginBottom: 16 }}
        >
          <Motorbike />
        </Animated.View>

        <Text style={styles.title}>Uhu! Pedido confirmado.</Text>
        <Text style={styles.message}>
          Agora é só aguardar que logo o café chegará até você!
        </Text>

        <View style={{ width: "100%", marginTop: 32 }}>
          <Button
            text="Ir para Home"
            onPress={() => navigation.navigate("home")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
