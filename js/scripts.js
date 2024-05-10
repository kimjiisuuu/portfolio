function handleSubmit(event) {
    event.preventDefault(); // 폼이 제출되는 것을 막습니다.

    // 모달을 닫습니다.
    closeEmailModal();

    // 폼 데이터를 가져옵니다.
    var form = document.getElementById('emailForm');
    var formData = new FormData(form);

    // Google Apps Script로 POST 요청을 보냅니다.
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // 성공 알림을 표시합니다.
                alert('이메일을 성공적으로 보냈습니다.');
                window.location.reload();
            } else {
                // 오류 알림을 표시합니다.
                alert('이메일을 보내는 중에 오류가 발생했습니다.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('이메일을 보내는 중에 오류가 발생했습니다.');
        });
}
function openEmailModal() {
    document.getElementById('emailModal').style.display = 'block';
}

function closeEmailModal() {
    document.getElementById('emailModal').style.display = 'none';
}