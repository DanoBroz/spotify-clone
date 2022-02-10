import { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLButtonElement>

export const SidebarButton = (props: Props) => {
    const {
        className,
        children,
        onClick,
        ...elementProps
    } = props

    return (
        <button
            className={'flex items-center space-x-2 hover:text-white transition-colors capitalize' + className}
            onClick={onClick}
            {...elementProps}
        >
            {children}
        </button>
    )
}
