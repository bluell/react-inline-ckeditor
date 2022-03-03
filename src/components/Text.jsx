import React from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Text = function Text(props) {
  const {
    textData,
  } = props;

  const editorConfiguration = {
    toolbar: [
      'bold',
      'italic',
      'underline',
      'link',
      // 'fontColor',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'undo',
      'redo',
    ],
  };

  console.log('===text===');

  return (
    <CKEditor
      editor={Editor}
      config={editorConfiguration}
      data={textData}
      onReady={editor => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
        console.log(Array.from(editor.ui.componentFactory.names()));
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log('Change: ', { event, editor, data });
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
    />
  );
};

export default Text;
