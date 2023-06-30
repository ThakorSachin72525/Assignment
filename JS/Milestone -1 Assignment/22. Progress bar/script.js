window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const scrollRatio = (scrollTop / (scrollHeight - clientHeight)) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = scrollRatio + '%';
});
