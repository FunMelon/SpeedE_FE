
const ControlButton = (props: { buttonContent: string, buttonId: string }) => {
    const event = () => {
        const a: HTMLElement | null = document.getElementById(props.buttonId)
        if (a != null) {
            a.style.display = "flex"
            const form_width = window.getComputedStyle(a).width
            const w = ((window.innerWidth - parseInt(form_width)) / 2).toString()
            a.style.left = w + "px"
            const form_height = window.getComputedStyle(a).height
            const h = ((window.innerHeight - parseInt(form_height)) / 2).toString()
            console.log(document.body.clientHeight)
            a.style.top = h + "px"
        }
    }
    return (
        <li>
            <button className={"BButton"} onClick={event}>
                {props.buttonContent}
            </button>
        </li>
    )

}

export default ControlButton