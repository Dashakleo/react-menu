import menuAll from '../data/menu'
const today = new Date();
const todayMenu = menuAll.find((item) => {
    return item.day === today.getDay() - 1
});

export default (menu = todayMenu.menu, action) => {
    switch (action.type) {
        default: return menu
    }
}