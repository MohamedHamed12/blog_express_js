const create_user = async (data) => {
    const user = await prisma.user.create({
        data: data,
      })
      console.log(user)
}