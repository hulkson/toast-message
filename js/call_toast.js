// // create thông tin test truyền vào toast
// toast({tittle: 'Thành Công !',
//       message: 'Bạn đã đăng ký thành công',
//       type: 'warning',
//       duration: 3000
// });

// toast function
function toast({ tittle = '', message = '', type = 'info', duration = 3000 }) {
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div');

    // auto remove
    const autoRemove = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);

    // remove onclick
    toast.onclick = function(e) {
      if (e.target.closest('.toast__close')) {
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    }

    const icons = {
      success: 'fas fa-check-circle',
      info: 'fas fa-info-circle',
      warning: 'fas fa-exclamation-circle',
      error: 'fas fa-exclamation',
    };

    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideToLeft 0.5s ease,
                            fadeOut 1s ${delay}s linear forwards`;
    toast.innerHTML = `
      <div class="toast__icon">
          <i class="${icon}"></i>
        </div>

        <div class="toast__content">
          <h3 class="toast__title">${tittle}</h3>
          <p class="toast__msg">${message}</p>
        </div>

        <div class="toast__close">
          <i class="far fa-times-circle"></i>
      </div>
    `;
    main.appendChild(toast);
  }
}


function showSuccessToast() {
  // create thông tin truyền vào toast
  toast({tittle: 'Thành Công !',
        message: 'Bạn đã đăng ký thành công',
        type: 'success',
        duration: 1000,
  });
}

function showErrorToast() {
  // create thông tin truyền vào toast
  toast({tittle: 'Thất bại',
        message: 'có lỗi, vui lòng thoát',
        type: 'error',
        duration: 3000,
  });
}
