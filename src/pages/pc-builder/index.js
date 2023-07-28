import MainLayout from "@/components/Layouts/MainLayout";

const PcBuilder = () => {
  return (
    <div>
      pc Builder Home Page
    </div>
  );
};

export default PcBuilder;


PcBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}