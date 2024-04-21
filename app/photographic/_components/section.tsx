import {ReactNode} from "react";

export const Section = (props: {
    children: ReactNode
}) => {
    return (
        <section className={'bg-photo-surface h-96 flex flex-col justify-center items-center gap-2'}>
            {props.children}
        </section>
    )
}
