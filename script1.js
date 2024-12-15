document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var grade = document.getElementById('grade').value;
    
    if (grade) {
        switch (grade) {
            case 'Kindergarten':
                window.location.href = 'https://paystack.com/pay/zayyatislamicschools';
                break;
            case '1':
                window.location.href = 'https://paystack.com/pay/basic1-3';
                break;
            case '2':
                window.location.href = 'https://paystack.com/pay/basic4fees';
                break;
            case '3':
                window.location.href = 'https://paystack.com/pay/jss1-3fees';
                break;
            case '4':
                window.location.href = 'https://paystack.com/pay/sss1-2fees';
                break;
            case '5':
                window.location.href = 'https://paystack.com/pay/sss3fees';
                break;
            default:
                alert('Please select a valid grade.');
        }
    } else {
        alert('Please select a grade.');
    }
});
