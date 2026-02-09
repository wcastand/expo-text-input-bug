import { Text, TextInput, View } from "react-native";
import { useResolveClassNames } from "uniwind";

export default function Index() {
	const { color: placeholderColor } = useResolveClassNames("text-gray-500")

	return (
		<View className="flex-1 p-8 gap-4">
			<Text>Edit app/index.tsx to edit this screen.</Text>
			<TextInput
				className="ring rounded p-2 py-2.5 font-normal text-base"
				placeholder="pladinghonder"
				autoCapitalize="none"
				placeholderTextColor={placeholderColor}
			// style={[{ fontSize: 16 }]}
			/>
			<TextInput
				className="ring rounded p-2 py-2.5 font-normal text-base leading-0"
				placeholder="pladinghonder"
				autoCapitalize="none"
				placeholderTextColor={placeholderColor}
			// style={[{ fontSize: 16 }]}
			/>
			<TextInput
				className="ring rounded p-2 py-2.5 font-normal"
				placeholder="pladinghonder"
				autoCapitalize="none"
				placeholderTextColor={placeholderColor}
				style={[{ fontSize: 16 }]}
			/>
		</View>
	);
}
