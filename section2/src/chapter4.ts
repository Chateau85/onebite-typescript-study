// 타입 별칭

type User = {
    id: number; name: string; nickname: string; birth: string; bio: string; location: string
}

let user1: User = {
    id: 1,
    name: "남철우",
    nickname: "ncw",
    birth: "1985.12.25",
    bio: "안녕하세요",
    location: "서울",
};

let user2: User = {
    id: 1,
    name: "남철우",
    nickname: "ncw",
    birth: "1985.12.25",
    bio: "안녕하세요",
    location: "서울",
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
}

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
}