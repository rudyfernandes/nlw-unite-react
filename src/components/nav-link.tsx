import { ComponentProps } from "react"

interface NavLink extends ComponentProps<'a'>{
    children: string
    href: string
}
export function NavLink(props: NavLink) {
    return( 
        <a { ...props } className='font-medium text-sm text-zinc-300'>
            {props.children}
        </a>
    )
}