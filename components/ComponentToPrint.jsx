import { forwardRef } from "react";

const ComponentToPrint = forwardRef((props, ref) => {
    return (
        <div className="py-12 px-24" ref={ref}>
            {props.children}
        </div>
    );
});

export default ComponentToPrint;
