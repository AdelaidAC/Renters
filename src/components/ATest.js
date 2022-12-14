import * as React from "react";
import ReactToPrint from "react-to-print";

const TextComponent = () => {
    return (
        <h1>This is bare text</h1>
    )
}

export class ClassComponentText extends React.PureComponent {
    componentRef = null;

    constructor(props) {
        super(props);

        this.state = {
        isLoading: false,
        text: "old boring text"
        };
    }

    setComponentRef = (ref) => {
        this.componentRef = ref;
    };

    reactToPrintContent = () => {
        return this.componentRef;
    };

    reactToPrintTrigger = () => {
        // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
        // to the root node of the returned component as it will be overwritten.

        // Bad: the `onClick` here will be overwritten by `react-to-print`
        // return <button onClick={() => alert('This will not work')}>Print this out!</button>;

        // Good
        return <button>Print pure text using a Class Component</button>;
    };

    render() {
        return (
        <div>
            <ReactToPrint
            content={this.reactToPrintContent}
            documentTitle="AwesomeFileName"
            removeAfterPrint
            trigger={this.reactToPrintTrigger}
            />
            {this.state.isLoading && (
            <p className="indicator">onBeforeGetContent: Loading...</p>
            )}
            <TextComponent ref={this.setComponentRef} />
        </div>
        );
    }
}
