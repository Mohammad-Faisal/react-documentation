import React from "react";


interface propTypes {
    title:string
}

/**
 * This is a Custom button that takes only one prop named title
 */


export default function CustomButton (props: propTypes) {

    // static propTypes = {
    //     /** Description of prop "foo". */
    //     foo: PropTypes.number,
    //     /** Description of prop "baz". */
    //     baz: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    // }
    // static defaultProps = {
    //     foo: 42
    // }

    return <button onClick={() => alert('Button is clicked')}>{props.title}</button>
}