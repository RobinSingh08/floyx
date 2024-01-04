import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ContentEditable from 'react-contenteditable';
import YouTube from 'react-youtube';
import Vimeo from 'react-vimeo';
import { Input, Typography, useTheme } from '@mui/material';
import { v4 } from 'uuid';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import BoldIcon from '@mui/icons-material/FormatBoldOutlined';
import ItalicIcon from '@mui/icons-material/FormatItalicOutlined';
import BsListUl from '@mui/icons-material/FormatListBulletedOutlined';
import AiOutlineOrderedList from '@mui/icons-material/FormatListNumberedOutlined';
import LinkIcon from '@/assets/images/svg/link';
import QuoteRightIcon from '@/assets/images/svg/quoteRight';
import VideoIcon from '@/assets/images/svg/video';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { ArticleItem } from './styled-article-items';
import ImageIcon from '@/assets/images/svg/image';

const ArticleItems = ({ content, handleContentChange, articleCreated }) => {
  const { palette } = useTheme();
  const colorVvg =
    palette?.mode === 'light' ? palette.text.primary : palette?.primary?.main;
  const [isTextSelected, setIsTextSelected] = React.useState(false);
  const [state, setState] = React.useState<any>({
    currentImgIndex: null,
    inputsList: content !== '' ? content : [],
    previousKey: null,
    selectedPosition: {
      left: 0,
      top: 0,
    },
    urlValue: '',
    openContextLink: false,
    errors_urlValue: false,
    errors: {},
    showEmojiPicker: false,
    index: 0,
    nameLink: '',
    contentArticleCreated: articleCreated,
  });
  const wrapperRef: any = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    if (!state.inputsList.length) {
      initArticleComposer();
    }
    return () => document.removeEventListener('mousedown', handleClick, false);
  }, []);

  const handleClick = (e: any) => {
    if (wrapperRef && !wrapperRef?.current?.contains(e.target)) {
      setState(prev => ({ ...prev, showEmojiPicker: false }));
    }
  };

  React.useEffect(() => {
    focus(state.index);
  }, [state.index]);

  const initArticleComposer = () => {
    addInput(0);
  };

  const handleText = (index: number, e: any) => {
    if (!e.currentTarget.className.includes('contenteditable')) {
      e.preventDefault();
    }
    const { inputsList } = state;
    const item = inputsList.find((x: any) => x.index === index);

    const name = e.target.name || 'value';
    let { value } = e.target;
    const lineFeedCode = 10;

    if (value.charCodeAt(0) === lineFeedCode) {
      value = value.substring(1, value.length);
    }
    let html = value === '<br>' ? '' : value;
    if (item.type == 'ul' || item.type == 'ol') {
      if (item.type == 'ul') {
        html = html.replace(/<ul>/g, '').replace(/<\/ul>/g, '');
      } else {
        html = html.replace(/<ol>/g, '').replace(/<\/ol>/g, '');
      }
      html = html.replace(/div/g, 'li');
      if (html.indexOf('<') == -1) {
        html = `<${item.type}><li>${html}</li></${item.type}>`;
      } else {
        html = `<${item.type}>${html}</${item.type}>`;
      }
    }
    item[name] = html;

    setState(prev => ({ ...prev, inputsList, contentArticleCreated: true }));

    if (item.type === 'youtube') {
      handleYT(index);
    }
  };

  const handleYT = (index: number) => {
    const { inputsList } = state;
    const item = inputsList.find((x: any) => x.index === index);

    const ytID = item.value.split('watch?v=')[1];
    const vimeoID = item.value.split('vimeo.com/')[1];
    if (ytID) {
      item.active = false;

      const youtubeID = ytID.split('&')[0];
      item.ytID = youtubeID;
      setState(prev => ({ ...prev, index: item.index, inputsList }));
      // focus(item.index)
    }

    if (vimeoID) {
      item.active = false;
      item.vimeoID = vimeoID;
      setState(prev => ({ ...prev, index: item.index, inputsList }));
      // focus(item.index)
    }
  };

  const handleKey = (index: any, e: any) => {
    const { inputsList, previousKey, contentArticleCreated } = state;
    const { key, shiftKey } = e;
    const { name, value } = e.target;
    const item = inputsList.find((x: any) => x.index === index);
    handleContentChange('', inputsList, contentArticleCreated);
    const isList = item.type === 'ul' || item.type === 'ol';
    if (isList) {
      if (key === 'Enter') {
        if (!item.value) {
          changeInputType(index, 'paragraph');
        }
        if (previousKey === 'Enter') {
          e.preventDefault();
          item.value = item.value.replace('<li><br></li></ul>', '</ul>');
          item.value = item.value.replace('<li><br></li></ol>', '</ol>');
          addInput(index);
        }
      } else if (key === 'Backspace') {
        if (
          !item.value ||
          item.value == '<ul><li><br></li></ul>' ||
          item.value == '<ol><li><br></li></ol>'
        ) {
          changeInputType(index, 'paragraph');
        }
      }
      setState(prev => ({ ...prev, previousKey: key }));
    } else {
      setState(prev => ({ ...prev, previousKey: null }));
      if (key === 'Enter' && !shiftKey) {
        e.preventDefault();
        addInput(item.index);
        return;
      }
      if (key === 'Backspace') {
        if (name === 'caption' && !value) {
          const nodes = document.getElementsByClassName(
            'articles-editor__item'
          );
          const HTMLElement: any = nodes[index] as HTMLElement;
          HTMLElement.childNodes[0].click();
          e.preventDefault();
        }
        if (inputsList.length > 1 && !item.value) {
          deleteInput(item.index);
          e.preventDefault();
        }
      }
    }
  };

  const toggleTooltip = (index: number) => {
    const { inputsList } = state;
    const item = inputsList.find((x: any) => x.index === index);

    const visible = item.tooltip;
    inputsList.forEach((input: any) => {
      input.tooltip = false;
    });
    item.tooltip = !visible;

    clearUrlContext();
    setState(prev => ({ ...prev, inputsList }));
  };

  const clearUrlContext = () => {
    setState(prev => ({
      ...prev,
      openContextLink: false,
      errors: {},
      urlValue: '',
      nameLink: '',
    }));
  };

  const addInput = (index: number) => {
    console.trace();
    let { inputsList } = state;
    const arrayIndex = inputsList.findIndex((x: any) => x.index === index);
    let maximumIndex: number = Math.max(
      ...inputsList.map((item: any) => item.index)
    );
    maximumIndex = maximumIndex === -Infinity ? 0 : maximumIndex + 1;

    inputsList = [
      ...inputsList.slice(0, arrayIndex + 1),
      {
        autoFocus: true,
        index: maximumIndex,
        key: v4(),
        tooltip: false,
        type: 'paragraph',
        value: '',
      },
      ...inputsList.slice(arrayIndex + 1),
    ];
    setState(prev => ({ ...prev, index, inputsList }));
  };

  const deleteInput = (index: number) => {
    const { inputsList } = state;
    if (inputsList.length > 1) {
      const arrayIndex = inputsList.findIndex((x: any) => x.index === index);
      inputsList.splice(arrayIndex, 1);

      const previousItem = inputsList[arrayIndex - 1];

      if (previousItem) {
        const nodes = document.getElementsByClassName('articles-editor__item');
        if (previousItem.type === 'image' || previousItem.type === 'youtube') {
          const HTMLElement: any = nodes[arrayIndex - 1] as HTMLElement;
          HTMLElement.childNodes[0].click();
        } else {
          setTimeout(() => {
            const previousEl = nodes[arrayIndex - 1] as HTMLElement;
            previousEl.focus();

            if (
              typeof window.getSelection !== 'undefined' &&
              typeof document.createRange !== 'undefined'
            ) {
              const range = document.createRange();
              range.selectNodeContents(previousEl);
              range.collapse(false);
              const sel = window.getSelection();
              if (sel !== null) {
                sel.removeAllRanges();
                sel.addRange(range);
              }
            }
          }, 0);
        }
        setState(prev => ({ ...prev, inputsList }));
      }
    } else {
      setState(prev => ({ ...prev, inputsList: [] }));
      addInput(0);
    }
  };

  const saveImgIndex = (index: number) => {
    const { inputsList } = state;
    const arrayIndex = inputsList.findIndex((x: any) => x.index === index);
    setState(prev => ({ ...prev, currentImgIndex: arrayIndex }));
  };

  const handleImg = (e: any) => {
    e.preventDefault();
    if (e.target.files.length) {
      const reader = new FileReader();
      const img = e.target.files[0];
      reader.readAsDataURL(img);
      reader.onloadend = () => {
        const formData = new FormData();
        formData.set('file', img);
        // requestService.post(ApiEndpoint.UploadArticleImage, formData).success((resp) => {
        //   const imageUrl = resp.data
        //   const { currentImgIndex, inputsList } = state
        //   let maximumIndex: number = Math.max(...inputsList.map((item: any) => item.index))
        //   maximumIndex = maximumIndex === -Infinity ? 0 : maximumIndex
        //   inputsList[currentImgIndex] = {
        //     active: false,
        //     captionFocused: true,
        //     index: maximumIndex,
        //     key: v4(),
        //     value: imageUrl,
        //     tooltip: false,
        //     type: 'image'
        //   }
        //   setState((prev) => ({ ...prev, currentImgIndex: null, inputsList }))
        //   addInput(currentImgIndex)
        // })
      };
    }
  };

  const imgComposerOutline = (e: any) => {
    const { inputsList } = state;
    const arrayIndex = inputsList.findIndex((x: any) => x.active === true);

    if (
      !e.target.className.includes('toggle-media') &&
      inputsList[arrayIndex]
    ) {
      inputsList[arrayIndex].active = false;
      document.body.removeEventListener('click', imgComposerOutline, true);
      document.body.removeEventListener('keydown', keyDownImgComposer, true);
    }
    setState(prev => ({ ...prev, inputsList }));
  };

  const keyDownImgComposer = (e: any) => {
    e.preventDefault();
    const { inputsList } = state;
    const { keyCode } = e;
    const backspaceCode = 8;
    const enterCode = 13;
    const arrayIndex = inputsList.findIndex((x: any) => x.active === true);
    const item = inputsList[arrayIndex];

    if (keyCode === backspaceCode && arrayIndex !== -1) {
      document.body.removeEventListener('click', imgComposerOutline, true);
      document.body.removeEventListener('keydown', keyDownImgComposer, true);
      deleteInput(item.index);
    }
    if (keyCode === enterCode) {
      document.body.removeEventListener('click', imgComposerOutline, true);
      document.body.removeEventListener('keydown', keyDownImgComposer, true);
      item.active = false;
      setState(prev => ({ ...prev, inputsList }));
      addInput(item.index);
    }
  };

  const toggleMediaActive = (index: number) => {
    const { inputsList } = state;
    const arrayIndex = inputsList.findIndex((x: any) => x.index === index);

    if (inputsList[arrayIndex]) {
      inputsList[arrayIndex].active = !inputsList[arrayIndex].active;
      setState(prev => ({ ...prev, inputsList }));
      if (inputsList[arrayIndex].active) {
        document.body.addEventListener('click', imgComposerOutline, true);
        document.body.addEventListener('keydown', keyDownImgComposer, true);
      } else {
        document.body.removeEventListener('click', imgComposerOutline, true);
        document.body.removeEventListener('keydown', keyDownImgComposer, true);
      }
    }
  };

  const changeInputType = (index: number, type: string) => {
    const { inputsList } = state;
    const item = inputsList.find((x: any) => x.index === index);

    item.type = type;
    item.tooltip = false;
    if (type == 'ul') {
      item.value = '<ul><li><br></li></ul>';
    }
    if (type == 'ol') {
      item.value = '<ol><li><br></li></ol>';
    }
    setState(prev => ({ ...prev, index: item.index, inputsList }));
    // focus(item.index)
  };

  const toggleTooltipIcon = (index: number) => {
    const { inputsList } = state;
    const item = inputsList.find((x: any) => x.index === index);

    inputsList.forEach((input: any) => {
      input.tooltip = false;
      input.tooltipIcon = false;
    });

    item.tooltipIcon = true;
    setState(prev => ({ ...prev, inputsList }));
  };

  const toolbarOutline = (e: any) => {
    const { target } = e;
    const parent = target.parentNode;
    if (
      typeof target.className === 'string' &&
      !(
        target.className.includes('articles-editor__item ') ||
        target.className.includes('articles-editor__toolbar') ||
        parent.className.includes('articles-editor__toolbar-item')
      )
    ) {
      setIsTextSelected(false);
    }
  };

  const openTextSelected = () => {
    let isTextSelected = false;
    try {
      const selection = window.getSelection();
      if (selection) {
        isTextSelected = !(selection.focusOffset === selection.anchorOffset);
        if (isTextSelected) {
          const position = selection.getRangeAt(0).getBoundingClientRect();
          const selectedPosition = {
            left: position.left - 36,
            top: position.top - 60,
          };
          setState(prev => ({ ...prev, selectedPosition }));
          setIsTextSelected(isTextSelected);
          document.body.addEventListener('click', toolbarOutline, true);
        }
      }
    } catch (error) {
      console.error(error);
    }
    if (!isTextSelected) {
      setIsTextSelected(isTextSelected);
      document.body.removeEventListener('click', toolbarOutline, true);
    }
  };

  const execCommand = (type: string, e: any) => {
    e.preventDefault();
    document.execCommand(type, false, undefined);
  };

  const onURLChange = (e: any) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
    const { inputsList } = state;
    handleContentChange('', inputsList);
  };

  const focus = (index: number) => {
    const { inputsList } = state;
    const maximumIndex: number = Math.max(
      ...inputsList.map((item: any) => item.index)
    );

    setTimeout(() => {
      const nodes = document.getElementsByClassName('articles-editor__item');
      if (index < nodes.length) {
        const nodeIndex = inputsList.findIndex(
          (x: any) => x.index === maximumIndex
        );
        (nodes[nodeIndex] as HTMLElement)?.focus();
      }
    }, 50);
  };

  const checkUrl = (url: string, typeField: string = 'urlValue') => {
    let new_url = url;
    //eslint-disable-next-line
    const regex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

    if (new_url.length && !new_url.match(/http/)) {
      new_url = `http://${url}`;
    }
    if (!regex.test(new_url)) {
      setState((prevState: any) => ({
        ...prevState,
        errors: { ...prevState.errors, [typeField]: true },
      }));
      return false;
    }
    setState((prevState: any) => ({
      ...prevState,
      errors: { ...prevState.errors, [typeField]: false },
    }));
    return new_url;
  };

  const confirmLink = (e: any, index: number) => {
    e.preventDefault();
    const { urlValue, nameLink, inputsList } = state;
    const correct_urlValue = checkUrl(urlValue, 'urlValue');
    if (correct_urlValue === false) {
      return;
    }
    inputsList[index].value = `<a href="${correct_urlValue}">${
      nameLink || urlValue
    }</a>`;

    setState(prev => ({
      ...prev,
      showURLInput: false,
      openContextLink: false,
      urlValue: '',
      nameLink: '',
      inputsList,
    }));
  };

  const listenerSubmit = (e: any, startMethod: any) => {
    const { key } = e;
    if (key === 'Enter') {
      startMethod();
    }
  };

  const openContextLink = () => {
    setState(prev => ({ ...prev, openContextLink: true }));
  };

  React.useEffect(() => {
    setState(prev => ({ ...prev, contentArticleCreated: articleCreated }));
  }, [articleCreated]);

  React.useEffect(() => {
    if (content.length) {
      setState(val => ({ ...val, inputsList: content }));
    }
  }, [content]);

  return (
    <ArticleItem>
      <div className="articles-editor__editor">
        {isTextSelected && (
          <div
            className="articles-editor__toolbar"
            style={{
              left: state.selectedPosition.left,
              top: state.selectedPosition.top,
            }}
          >
            <button
              className="articles-editor__toolbar-item"
              onClick={e => execCommand('bold', e)}
            >
              <BoldIcon />
            </button>
            <button
              className="articles-editor__toolbar-item"
              onClick={e => execCommand('italic', e)}
            >
              <ItalicIcon />
            </button>
          </div>
        )}
        {state?.inputsList?.map((input: any, index: number) => (
          <div className="input-item" key={input.key}>
            {!input.value && input.tooltipIcon && (
              <span
                className="text-tooltip toggle-tooltip"
                onClick={() => toggleTooltip(input.index)}
              >
                {input.tooltip ? (
                  <CancelOutlinedIcon color={'primary'} />
                ) : (
                  <AddCircleOutlineRoundedIcon color={'primary'} />
                )}
              </span>
            )}
            {/* <label className="emoji-btn" onClick={showEmojiPickers}>
                                      <FontAwesome icon="smile" />
                                  </label> */}
            {input.tooltip && !input.value && (
              <div className="articles-editor__change-type">
                <span onClick={() => changeInputType(input.index, 'ul')}>
                  <BsListUl color={'primary'} />
                </span>
                <span onClick={() => changeInputType(input.index, 'ol')}>
                  <AiOutlineOrderedList color={'primary'} />
                </span>
                <span
                  className="change-type__item subtitle"
                  onClick={() => changeInputType(input.index, 'subtitle')}
                >
                  Subtitle
                </span>
                <span onClick={openContextLink}>
                  <LinkIcon color={colorVvg} />
                </span>
                <span onClick={() => changeInputType(input.index, 'quote')}>
                  <QuoteRightIcon color={colorVvg} />
                </span>

                <span
                  className="change-type__item"
                  onClick={() => saveImgIndex(input.index)}
                >
                  <ImageIcon color={colorVvg} />
                </span>
                <Input id="img" type="file" onChange={handleImg} />
                <span
                  className="change-type__item"
                  onClick={() => changeInputType(input.index, 'youtube')}
                >
                  <VideoIcon color={colorVvg} />
                </span>

                {state.openContextLink && (
                  <div className="articles-editor__editor-link">
                    <div>
                      <React.Fragment>
                        <Input
                          className="editor-link__item"
                          onChange={onURLChange}
                          type="text"
                          value={state.urlValue}
                          onKeyDown={e =>
                            listenerSubmit(e, () => confirmLink(e, index))
                          }
                          placeholder="Paste URL link here"
                          name="urlValue"
                          // invalid={state.errors?.urlValue}
                        />
                        {/* <Input name="website" value={props.website} onChange={handleAbout} invalid={state.errors.website}/> */}
                        {state.errors.urlValue && (
                          <Typography>URL is invalid</Typography>
                        )}
                      </React.Fragment>
                      <Input
                        className="editor-link__item"
                        type="text"
                        onChange={onURLChange}
                        onKeyDown={e =>
                          listenerSubmit(e, () => confirmLink(e, index))
                        }
                        value={state.nameLink}
                        placeholder="Name of the link"
                        name="nameLink"
                      />
                    </div>
                    <button type="button" onClick={e => confirmLink(e, index)}>
                      <ArrowCircleRightIcon color={'primary'} />
                    </button>
                  </div>
                )}
              </div>
            )}
            {input.type === 'paragraph' && (
              <ContentEditable
                className={
                  'articles-editor__paragraph contenteditable articles-editor__item ' +
                  (state.inputsList.length === 1 && input.index === 0
                    ? 'first'
                    : '')
                }
                html={input.value}
                disabled={false}
                onChange={e => handleText(input.index, e)}
                onKeyUp={openTextSelected}
                onMouseUp={openTextSelected}
                onKeyDown={e => handleKey(input.index, e)}
                onFocus={() => toggleTooltipIcon(input.index)}
                placeholder="Type any text"
                name="value"
                value={input.value}
              />
            )}

            {input.type === 'subtitle' && (
              <ContentEditable
                className="articles-editor__subtitle contenteditable articles-editor__item"
                html={input.value}
                disabled={false}
                onChange={e => handleText(input.index, e)}
                onKeyUp={openTextSelected}
                onMouseUp={openTextSelected}
                onKeyDown={e => handleKey(input.index, e)}
                onFocus={() => toggleTooltipIcon(input.index)}
                placeholder="Subtitle"
                name="value"
                value={input.value}
              />
            )}
            {input.type === 'quote' && (
              <ContentEditable
                className="articles-editor__quote contenteditable articles-editor__item"
                html={input.value}
                disabled={false}
                onChange={e => handleText(input.index, e)}
                onKeyUp={openTextSelected}
                onMouseUp={openTextSelected}
                onKeyDown={e => handleKey(input.index, e)}
                onFocus={() => toggleTooltipIcon(input.index)}
                placeholder="Add quote"
                name="value"
                value={input.value}
              />
            )}
            {input.type === 'ul' && (
              <ContentEditable
                className="articles-editor__ul contenteditable articles-editor__item"
                html={input.value}
                disabled={false}
                onChange={e => handleText(input.index, e)}
                onKeyUp={openTextSelected}
                onMouseUp={openTextSelected}
                onKeyDown={e => handleKey(input.index, e)}
                onFocus={() => toggleTooltipIcon(input.index)}
                placeholder="Let's create your unordered list"
                name="value"
                value={input.value}
              />
            )}
            {input.type === 'ol' && (
              <ContentEditable
                className="articles-editor__ol contenteditable articles-editor__item"
                html={input.value}
                disabled={false}
                onChange={e => handleText(input.index, e)}
                onKeyUp={openTextSelected}
                onMouseUp={openTextSelected}
                onKeyDown={e => handleKey(input.index, e)}
                onFocus={() => toggleTooltipIcon(input.index)}
                placeholder="Let's create your ordered list"
                name="value"
                value={input.value}
              />
            )}
            {input.type === 'link' && (
              <Input
                className="articles-editor__link articles-editor__item"
                autoFocus={input.autoFocus}
                onChange={e => handleText(input.index, e)}
                onKeyDown={e => handleKey(input.index, e)}
                onFocus={() => toggleTooltipIcon(input.index)}
                placeholder="Paste a link to embed content and press Enter"
                name="value"
                value={input.value}
              />
            )}
            {input.type === 'image' && (
              <div>
                {input.value && (
                  <div className="articles-editor__photo articles-editor__item toggle-media">
                    <img
                      className={
                        'articles-editor__photo-preview toggle-media ' +
                        (input.active ? 'active' : '')
                      }
                      src={input.value}
                      onClick={() => toggleMediaActive(input.index)}
                    />
                    {(input.caption || input.captionFocused) && (
                      <TextareaAutosize
                        className="articles-editor__caption"
                        onChange={e => handleText(input.index, e)}
                        onKeyDown={e => handleKey(input.index, e)}
                        placeholder="Add caption (optional)"
                        name="caption"
                        value={input.caption}
                      />
                    )}
                  </div>
                )}
              </div>
            )}
            {input.type === 'youtube' && (
              <div className="articles-editor__video toggle-media">
                {input.ytID && (
                  <div
                    className={
                      'articles-editor__iframe-container articles-editor__item toggle-media ' +
                      (input.active ? 'active' : '')
                    }
                    onClick={() => toggleMediaActive(input.index)}
                  >
                    <YouTube
                      className="articles-editor__iframe"
                      videoId={input.ytID}
                    />
                  </div>
                )}
                {input.vimeoID && (
                  <div
                    className={
                      'articles-editor__iframe-container articles-editor__item toggle-media ' +
                      (input.active ? 'active' : '')
                    }
                    onClick={() => toggleMediaActive(input.index)}
                  >
                    <Vimeo
                      className="articles-editor__iframe"
                      videoId={input.vimeoID}
                    />
                  </div>
                )}
                {!input.ytID && !input.vimeoID && (
                  <Input
                    className="articles-editor__video-link articles-editor__item"
                    onInput={e => handleText(input.index, e)}
                    onKeyDown={e => handleKey(input.index, e)}
                    value={input.value}
                    name="value"
                    placeholder="Paste a YouTube or Vimeo link, press enter and give it a few seconds"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </ArticleItem>
  );
};

export default React.memo(ArticleItems);
