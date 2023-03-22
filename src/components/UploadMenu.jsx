import { Avatar } from "@mui/material";
import React, { useState } from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";
import CloseIcon from "@mui/icons-material/Close";
import { myState } from "../context/Context";
import { db, storage } from "../Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const UploadMenu = () => {
  const {
    state: { user },
    dispatch,
  } = myState();
  const [modal, setModal] = useState(false);
  const [uploadImg, setUploadImg] = useState(null);
  const [msg, setMsg] = useState("");
  const [progresspercent, setProgresspercent] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };
  const uploadFileWithClick = () => {
    document.getElementById("imagefile").click();
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setUploadImg(e.target?.files[0]);
    }
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadImg) {
      const collectionRef = collection(db, "posts");

      const payload = {
        message: msg,
        username: user.displayName,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      };

      await addDoc(collectionRef, payload);
    } else {
      const storageRef = ref(storage, `images/${uploadImg.name}`);
      const uploadTask = uploadBytesResumable(storageRef, uploadImg);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const collectionRef = collection(db, "posts");

            const payload = {
              message: msg,
              username: user.displayName,
              photoUrl: user.photoUrl,
              image: downloadURL,
              timestamp: serverTimestamp(),
            };

            addDoc(collectionRef, payload);
          });
        }
      );
    }

    toggleModal();

    setMsg("");
    setUploadImg(null);
    setProgresspercent(0);
  };
  return (
    <>
      {modal && (
        <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed z-50 ">
          <div className="w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed  bg-gray-200 bg-opacity-50">
            <div className=" absolute top-[20%] left-[35%] w-[500px]  bg-white rounded-xl">
              <form>
                <div className="flex justify-between items-center px-8  h-[40px]">
                  <h3 className="font-bold">Create Post</h3>
                  <CloseIcon
                    onClick={toggleModal}
                    className="cursor-pointer hover:bg-gray-300 rounded-full"
                  />
                </div>
                <div className="flex py-[15px] pl-2 items-center">
                  <Avatar src={user.photoUrl} />
                  <h5 className="ml-[10px] capitalize">{user.displayName}</h5>
                </div>
                <div className="pl-2">
                  <textarea
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-[100%] min-h-[100px] text-[20px] outline-none capitalize   "
                    placeholder={`What's on your mind ${user.displayName} ?`}
                    rows="5"
                    value={msg}
                  >
                    {msg}
                  </textarea>
                </div>
                <hr />

                {uploadImg ? (
                  <div
                    className="  flex items-center justify-center gap-4 bg-green-500 text-white
                   py-1"
                  >
                    <CheckCircleOutlineIcon />
                    <p className="text-[18px]">Added Successfully !</p>
                  </div>
                ) : (
                  <div className="flex items-center  justify-between  px-[10px] py-[10px]">
                    <div>
                      <h4>Add to your post</h4>
                    </div>
                    <div className="flex gap-3">
                      <PhotoLibraryIcon
                        onClick={uploadFileWithClick}
                        className="text-green-500"
                      />
                      <input
                        onChange={handleChange}
                        type="file"
                        className="hidden"
                        id="imagefile"
                      />
                      <VideoCallIcon className="text-red-500" />
                      <MoodIcon className="text-yellow-500" />
                    </div>
                  </div>
                )}

                <button
                  onClick={handleUpload}
                  className="w-[100%] bg-[#2391fa] px-[20px] py-[10px] text-white uppercase text-[16px] cursor-pointer "
                  type="submit"
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div
        onClick={toggleModal}
        className=" bg-white w-[100%] p-[15px] rounded-xl mt-[30px] shadow-xl cursor-pointer  "
      >
        <div className="flex items-center flex-1">
          <Avatar src={user.photoUrl} />
          <form className="flex-1 bg-gray-100 rounded-[20px] ml-[10px] p-[10px] ">
            <input
              className="w-[100%] outline-none bg-transparent capitalize "
              type="text"
              placeholder={`What's on your mind ${user.displayName}?`}
            />
          </form>
        </div>
        <div className="flex items-center justify-between mt-[15px] pt-6 pb-6 border-t border-gray-200 ">
          <div className="flex items-center cursor-pointer gap-2 hover:bg-gray-200 rounded-xl p-1">
            <VideoCallIcon className="text-red-500" />
            <p>Live Video</p>
          </div>
          <div className="flex items-center cursor-pointer gap-2   hover:bg-gray-200 rounded-xl p-1 ">
            <PhotoLibraryIcon className="text-green-500" />
            <p>Photo/Video</p>
          </div>
          <div className="flex items-center cursor-pointer gap-2  hover:bg-gray-200 rounded-xl p-1">
            <MoodIcon className="text-yellow-500" />
            <p>Feeling/Activity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadMenu;
