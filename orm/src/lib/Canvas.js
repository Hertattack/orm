import React from 'react';
class Canvas extends React.Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(30, 0, 150, 75);
        ctx.beginPath();
        ctx.arc(195, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }

    render() {
        return(
        <div>
            <canvas ref="canvas" width="500" height="600"/>
        </div>
        )
    }
}
export default Canvas