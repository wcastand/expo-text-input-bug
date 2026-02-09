import { Text, TextInput, View } from "react-native";
import { tv } from "tailwind-variants";
import { useResolveClassNames } from "uniwind";

export const textFieldStyle = tv({
	base: "ring rounded p-2 py-2.5 font-normal",
	compoundVariants: [{ className: "ring-gray-500 bg-transparent", disabled: true, error: true }],
	variants: {
		disabled: {
			false: "bg-transparent",
			true: "bg-white ring-gray-500",
		},
		error: {
			false: "",
			true: "ring-red-500 text-red-500 bg-red-500/5",
		},
		variant: {
			black: "bg-transparent ring-black text-black",
			default: "bg-white/20 ring-black text-black",
			filled: "bg-white ring-gray-500 text-gray-500",
			outline: "bg-transparent ring-black text-black",
			white: "bg-white/20 ring-white text-white",
		},
	},
})
const placeholderColorStyle = tv({
	base: "text-gray-500",
	variants: {
		error: {
			false: "",
			true: "text-red-500/50",
		},
		variant: {
			black: "text-black/50",
			default: "text-gray-500",
			filled: "text-gray-500",
			outline: "text-gray-500",
			white: "text-black/50",
		},
	},
})

export default function Index() {
	const { color: placeholderColor } = useResolveClassNames(placeholderColorStyle({ error: false, variant: "default" }))

	return (
		<View className="flex-1 p-8 gap-4">
			<Text>Edit app/index.tsx to edit this screen.</Text>
			<TextInput
				className={textFieldStyle({ disabled: false, error: false, variant: "default", className: "text-base" })}
				placeholder="pladinghonder"
				autoCapitalize="none"
				placeholderTextColor={placeholderColor}
			// style={[{ fontSize: 16 }]}
			/>
			<TextInput
				className={textFieldStyle({ disabled: false, error: false, variant: "default", })}
				placeholder="pladinghonder"
				autoCapitalize="none"
				placeholderTextColor={placeholderColor}
				style={[{ fontSize: 16 }]}
			/>
		</View>
	);
}
