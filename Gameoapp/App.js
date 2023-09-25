import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { AuthProvider } from "./context/AuthContext";
import AuthNavigation from "./navigation/AuthNavigation";

export default function App() {
  return (
    <AuthProvider>
      <AuthNavigation />
    </AuthProvider>
  );
}

registerRootComponent(App);
