import React from 'react'
import {Editor} from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form' 

const RTE = ({name, control, label, defaultValue = ''}) => {
  return (
    <div className='w-full'>
      { label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Controller
        name = {name || 'content'}
        control={control}
        render={({field: {onChange}})=>(
          <Editor
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'image','advlist','autolink','lists','link','charmap','preview','anchor','searchreplace','visbleblock','code','fullscreen','media','table','code','help','wordcount'
              ],
              toolbar:[
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic"
              ],
              content_style: 'body { font-family:Helvetica, Arical, sans-serif; font-size:14px}'
            }}
            onEditorChange = {onChange} 
          />
        )}
      />
    </div>
  )
}

export default RTE
