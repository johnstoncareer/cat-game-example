export class MouseEventListener {
    constructor(context) {
        this.mousePositionX = context.getWidth();
        this.mousePositionY = context.getHeight();
        this.clicked = false;

        window.addEventListener('mousedown', e => {
            if (context && context.getBoundingClientRect() && context.getScreen()) {
                var rect = context.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                context.getScreen().onMouseClick(x, y);
            }
            this.clicked = true;
        });

        window.addEventListener('mouseup', e => {
            if (context && context.getBoundingClientRect() && context.getScreen()) {
                var rect = context.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                context.getScreen().onMouseUnclick(x, y);
            }
            this.clicked = false;
        });

        window.addEventListener('mousemove', e => {
            if (context && context.getBoundingClientRect()) {
                var rect = context.getBoundingClientRect();
                this.mousePositionX = e.clientX - rect.left;
                this.mousePositionY = e.clientY - rect.top;
                if (context.getScreen()) {
                    context.getScreen().onMouseMove(this.mousePositionX, this.mousePositionY);
                }
            }
        });
    }
}