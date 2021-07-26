export default function ListContext(props) {
    function specialParse(context) {
        const fragment = context.split('/^')
        return fragment.map((text) => {
            if (typeof (props.additionals[text]) === "undefined") {
                return (
                    <>
                        {text}
                    </>
                )
            } else {
                const part = props.additionals[text]
                switch (part.type) {
                    case "photo":
                        return (
                            <>
                                {typeof (part.height) === "undefined" ?
                                    <img src={part.link}
                                        alt={part.alt} />
                                    :
                                    <img src={part.link}
                                        height={part.height}
                                        width={part.width}
                                        alt={part.alt} />
                                }

                            </>
                        )
                    case "code":
                        return (
                            <>
                                <pre>
                                    <code>
                                        {part.text}
                                    </code>
                                </pre>
                            </>
                        )
                    case "link":
                        console.log("link")
                        if (typeof (part.blank) === "undefined") {
                            return (
                                <>
                                    <a href={part.link}
                                        rel="noreferrer noopener"
                                        target="_blank">
                                        {part.text}
                                    </a>
                                </>
                            )
                        } else {
                            if (part.blank === false) {
                                return (
                                    <>
                                        <a href={part.link}>
                                            {part.text}
                                        </a>
                                    </>
                                )
                            } else {
                                return (
                                    <>
                                        <a href={part.link}
                                            rel="noreferrer noopener"
                                            target="_blank">
                                            {part.text}
                                        </a>
                                    </>
                                )
                            }
                        }
                    case "iframe":
                        if (typeof (part.height) === "undefined") {
                            return (
                                <>
                                    <br />
                                    <iframe src={part.link}
                                        title={typeof (part.title) !== "undefined" ? part.title : "I forgot to put title"}
                                        referrerpolicy="no-referer">
                                    </iframe>
                                    <br />
                                </>
                            )
                        } else {
                            return (
                                <>
                                    <br />
                                    <iframe src={part.link}
                                        title={typeof (part.title) !== "undefined" ? part.title : "I forgot to put title"}
                                        height={part.height}
                                        width={part.width}
                                        referrerpolicy="no-referer">
                                    </iframe>
                                    <br />
                                </>
                            )
                        }

                }
            }
        })
    }

    return (
        props.context.split('\n').map((item) => (
            <>
                {specialParse(item)}
                <br />
            </>
        ))
    )
}