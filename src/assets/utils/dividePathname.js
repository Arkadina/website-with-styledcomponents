const dividePathname = (pathname) => {
    let arr = pathname.split("/").splice(1, pathname.length);
    for (let i = 0; i < arr.length; i++) {
        console.log(
            (arr[i] =
                arr[i].charAt(0).toUpperCase() +
                arr[i].substr(1, arr[i].length))
        );
    }
    return arr;
};

export default dividePathname;
