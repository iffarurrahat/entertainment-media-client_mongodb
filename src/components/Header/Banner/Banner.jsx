import Slider from "./Slider";


const slideData = [
    {
        "id": 1,
        "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
        "title": "Avatar: The Way of Water",
        "subTitle": "Set more than a decade after the events of the first film, learn the story of the Sully family the trouble that follows them.",
    },
    {
        "id": 2,
        "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        "title": "Black Adam",
        "subTitle": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb."
    },
    {
        "id": 3,
        "image": "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
        "title": "Black Panther: Wakanda Forever",
        "subTitle": "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death."
    }
]


const Banner = () => {
    return (
        <div className="w-full">
            <Slider slideData={slideData}></Slider>
        </div>
    );
};

export default Banner;