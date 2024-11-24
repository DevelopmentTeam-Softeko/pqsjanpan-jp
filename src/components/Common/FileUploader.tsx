'use client'

import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function FileUploader() {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        // @ts-ignore
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
    },
  })

  const thumbs = files.map((file) => (
    // @ts-ignore
    <div key={file.name}>
      <div className="w-44 border border-solid">
        <img
          // @ts-ignore
          src={file?.preview}
          className="w-full"
          // Revoke data uri after image is loaded
          onLoad={() => {
            // @ts-ignore
            URL.revokeObjectURL(file.preview)
          }}
          alt="Preview"
        />
      </div>
    </div>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    // @ts-ignore
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [])

  return (
    <section className="col-span-2 w-full rounded border-solid border-gray-200 bg-gray-200 p-4 text-center text-gray-700">
      <div
        {...getRootProps({ className: 'dropzone' })}
        style={{ minHeight: 80 }}
        className="flex items-center justify-center"
      >
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <aside>{thumbs}</aside>
    </section>
  )
}
