type Props = {
    text: string
    active: boolean
    onToggle: () => void
}

export default function FilterTag({ text, active, onToggle }: Props) {
    return (
        <label className="cursor-pointer">
            <input
                type="checkbox"
                className="hidden peer"
                checked={active}
                onChange={onToggle}
            />
            <span
                className="py-1.5 px-5 font-bold rounded-md text-center block transition-all duration-300 ease-out
                   bg-white text-primary
                   peer-checked:bg-accent peer-checked:text-white"
            >
        {text}
      </span>
        </label>
    )
}