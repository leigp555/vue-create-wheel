const htmlBody = document.body;
const moveX1 = {
    data: 0,
    get() {
        return this.data;
    },
    set(newData) {
        this.data = newData;
    },
};
const moveX2 = {
    data: 0,
    get() {
        return this.data;
    },
    set(newData) {
        this.data = newData;
    },
};

htmlBody.addEventListener("touchstart", (e) => {
    moveX1.set(e.touches[0].clientX);
});

htmlBody.addEventListener("touchmove", (e) => {
    const ahead = moveX1.get();
    moveX2.set(e.changedTouches[0].clientX - ahead);
});

export const newDate =()=>{return moveX2.get()}
