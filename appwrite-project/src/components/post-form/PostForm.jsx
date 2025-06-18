import React, {useCallback, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {Button, RTE, Input, Select} from '../../container/index'
import service from '../../authServices/conf'



function PostForm({post}){
    const navigate = useNavigate();
    const userData = useSelector(state => state.auth.userData)
    const {register, handleSubmit, control, setValue,getValues, watch} = useForm({
            defaultValues:{
                title: post?.title || "",
                slug: post?.slug || "",
                content: post?.content || "",
                status: post?. status || "",

            },
    });

    const submit = async (data) => {

        if(post) {
            const file = await data.image[0] ? service.uploadFile(data.image[0]) : null;
        

        if (file) {
            service.deleteFile(post.featuresImage);
        }

        const dbPost = await service.updatePost(post.$id, {
            ...data,
            featuresImages: file? file.$id: undefined
        });

        if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
        }

    } else{

        const file = await data.image[0]? service.uploadFile(data.image[0]) : null;

        if (file) {
            const fileId = file.$id;
            data.featuresImage = fileId;

            const dbPost = await service.createPost({...data, userid : userData.$id})
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }

        }

    }
    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string') 
           return value 
           .trim()
           .toLowerCase()
           .replace(/[^a-zA-Z\d\s]+/g, "-")
           .replace(/\s/g, "-");

            return "";
        
    },[])
    useEffect(() =>{
      const subscription = watch((value, {name}) =>{
        if (name === 'title') {
            setValue("slug", slugTransform(value.title), {shouldValidate: true } )
        }
      });
      return () => subscription.unsubscribe();

    }, [slugTransform, watch,setValue])

    
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={service.getFilePreview(post.featuresImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}

export default PostForm
