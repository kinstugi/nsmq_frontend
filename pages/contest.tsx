import CustomAppbar from '@/components/custom_appbar'
import BodyFit from '@/components/body_fit'

const ContestPage = () => {
    return (
        <>
            <CustomAppbar showTabs={false}/>
            <BodyFit>
                <h1>Some contest going on or something</h1>
            </BodyFit>
        </>
    )
}

export default ContestPage