let noButtonState = 0;

// Hiện gif ban đầu
showElement('gifContainer');

document.getElementById('siBtn').addEventListener('click', handleYesClick);
document.getElementById('noBtn').addEventListener('click', handleNoClick);

function handleYesClick() {
    hideAll(['gifContainer', 'sadGifContainer', 'sadGifContainer1', 'sadGifContainer2', 'happyGifContainer2', 'happyGifContainer3', 'happyGifContainer4']); 
    // Ẩn hết tất cả luôn cho sạch

    showElement('happyGifContainer');
    hideAll(['question', 'siBtn', 'noBtn']);
    document.body.classList.add('bg-green');

    showElement('messageContainer');
    document.getElementById('messageContainer').innerHTML = 'anh cũng yêu em';

    const happyGifs = ['happyGifContainer2', 'happyGifContainer3', 'happyGifContainer4'];

    happyGifs.forEach((gif, index) => {
        setTimeout(() => {
            hideAll(happyGifs.concat(['happyGifContainer']));
            showElement(gif);
        }, (index + 1) * 1000);
    });
}

function handleNoClick() {
    const noTexts = [
        'Chọn lại đi mà~', 'Chọn kỹ vô nha!', 'Nghĩ kỹ chưa đó?', 'Đừng màaa~',
        'Bỏ tui lại sao được huhu', 'Là sao nữa trời?', 'Làm lại đi mà~', 'Nữa hả? Bấm nút bên trái kìa!',
        'Nhấn nút bên trái á nha!', 'Ahhh, không thương anh rồi đúng hông?', 'Không có tình cảm gì luôn hả?',
        'Có thương anh xíu nào hong?', 'Nghĩ kỹ chưa zợ~', 'NOOO...', 'Nghĩ kỹ lại đi mà~', 'Anh yêu em nhiều lắm á!'
    ];
    hideElement('gifContainer');
    const sadGifs = ['sadGifContainer', 'sadGifContainer2', 'sadGifContainer1'];

    if (noButtonState < noTexts.length) {
        document.getElementById('noBtn').innerHTML = noTexts[noButtonState];
        document.getElementById('noBtn').style.backgroundColor = '#F1330A';

        if (noButtonState < 3) {
            hideAll(sadGifs);
            showElement(sadGifs[noButtonState]);
        }

        const siBtn = document.getElementById('siBtn');
        const size = 40 + (noButtonState * 20);
        siBtn.style.fontSize = `${size}px`;
        siBtn.style.padding = `${size / 2}px ${size}px`;

        noButtonState++;
    } else {
        handleYesClick();
    }
}

function resetNoButton() {
    hideAll(['sadGifContainer', 'sadGifContainer1', 'sadGifContainer2', 'happyGifContainer']);
    showElement('gifContainer');
    noButtonState = 0;
}

function showElement(id) {
    document.getElementById(id).style.display = 'block';
}

function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}

function hideAll(ids) {
    ids.forEach(id => {
        hideElement(id);
    });
}
