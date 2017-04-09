function getSmallPet() {
}
function isFish(pet) {
    return pet.swim !== undefined;
}
var pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();
var pet = getSmallPet();
// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
