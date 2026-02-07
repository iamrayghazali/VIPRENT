

export default function CarTag({text, key}) {
    return (
        <li key={key}
            className="text-xs border-1 border-gray-700 rounded-lg py-1 px-3 text-nowrap max-h-10">
            {text}
        </li>
    )
}