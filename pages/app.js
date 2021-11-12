import { Modal } from "@components/common";
import {
  AppHero,
  Curriculum,
  Keypoints
} from "@components/app";
import { BaseLayout } from "@components/layout";

export default function Course() {

  return (
    <BaseLayout>
      <div className="py-4">
        <CourseHero />
      </div>
      <Keypoints />
      <Curriculum />
      <Modal />
    </BaseLayout>
  )
}
