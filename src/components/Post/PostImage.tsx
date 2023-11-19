"use client"
import { Box, Modal, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Post from "./Post"
import moment from "moment"
import Link from "next/link"
import Image from 'next/image'

export default function PostImage({ image, link, shared, isShared, postId }: any) {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    if (!isShared) {
      setOpen(true)
    }
  }

  const openInNewTab = () => {
    return window.open(link.url, "_blank")
  }

  useEffect(() => {
      console.log(shared)
  }, [shared])

  return (
    <Box>
      {image &&
        <Box>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
            onClick={handleOpen}
            src={image.thumbnailPath}
            alt="thumbnail"
          />
          <Modal open={open} onClose={handleClose}>
            <Image
               width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
              src={image.thumbnailPath}
              alt="thumbnail"
            />
          </Modal>
        </Box>}
      {link &&
        <Box onClick={openInNewTab}>
          {link.thumbnailPath &&
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} // optional
              src={link.thumbnailPath}
              alt="thumbnail"
            />}
          <Box>
            <Typography component={"span"}>
              {link.startDate &&
                moment(link.startDate).format("DD MMM YYYY - ")}{" "}
              {link.title}
            </Typography>
            <Typography>
              {link.url}
            </Typography>
          </Box>
        </Box>}
      {shared && !isShared && (
        <>
          <Link href={`/post/${postId}`}>
            <Post
              name={shared?.author?.name || ''}
              username={shared?.author?.username || ''}
              createdDateTime={shared?.post?.createdDateTime}
              content={shared?.post?.content}
              shared={shared?.post?.shared}
              image={shared?.post?.image}
              link={shared?.post?.link}
              isShared={true}
              />
          </Link>
        </>
      )}
    </Box>
  )
}
