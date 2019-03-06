{
  const waitFor = ms => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const lineInputFontSetting = async () => {
    await waitFor(waitMSec);
    const _lineInput = $('.MdRGT06Form .mdRGT06Input')[0].style;
    _lineInput.fontSize = fontSize;
    _lineInput.lineHeight = lineHeight;
  }

  const waitMSec = 100;
  const fontSize = '20px';
  const lineHeight = '24px';

   _chat_list_body.addEventListener('click', lineInputFontSetting, false);
};