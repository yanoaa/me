import {yourName} from "@/app/property";

export default function Footer() {
    return (
        <footer>
            {yourName} © {new Date().getFullYear()}
        </footer>
    )
}
