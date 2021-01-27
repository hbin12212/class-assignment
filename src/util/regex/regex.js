//숫자유무
export const SearchNumber = /[0-9]/g;
//영어 유무
export const SearchEnglish = /[a-z]/gi;
//공백 유무
export const SearchSpace = /[\s]/g;
//비밀번호 특수문자
export const SearchPasswordSpecial = /[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi;
//전체 특수문자
export const SearchSpecialCharacters = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
//한글 유무
export const SearchKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
//이메일
export const EmailType = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
//comment 특수문자
export const SearchSpecialInput = /[\{\}\[\]\/<>$;:\\\\(\'\"]/gi;

export const checkRegex = (plusComment, types, input) => {
    var warn = [];
    if (input?.length < 1) {
        warn.push("올바른 값을 입력해주세요.");
    } else {
        for (var i = 0; i < types?.length; i++) {
            if (types[i] === "special") {
                if (IsInvalidInput(SearchSpecialCharacters, input)) {
                    warn.push(plusComment + " " + "특수문자를 포함할 수 없습니다.");
                }
            } else if (types[i] === "number") {
                console.log(isNaN(input));
                if (isNaN(input)) {
                    warn.push(plusComment + " " + "숫자만 입력할 수 있습니다.");
                }
            } else if (types[i] === "space") {
                if (IsInvalidInput(SearchSpace, input)) {
                    warn.push(plusComment + " " + "공백을 포함할 수 없습니다.");
                }
            }
        }
    }
    console.log(warn);
    return warn;
};

export const IsInvalidInput = (pattern, input) => {
    return input?.search(pattern) >= 0;
    // TRUE : Pattern Matched
    // FALSE : Pattern Not Matched
};
