export default function UserProfilePage({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
      
      <h1 className="text-2xl">Profile</h1>

      <p className="text-4xl font-bold">
        Profile page{" "}
        <span className="p-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
      

    </div>
  );
}