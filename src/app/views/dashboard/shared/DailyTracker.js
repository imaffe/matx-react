import React from 'react'
import { SimpleCard, MatxProgressBar } from 'app/components'

const DailyTracker = () => {
    return (
        <div>
            <SimpleCard title="任务">

                <small className="text-gray">人物外观</small>
                <div className="pt-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Diamond 1"
                />
                <div className="py-1" />

                <small className="text-gray">健康状态</small>
                <div className="pt-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Diamond 2"
                />
                <div className="py-1" />

                <small className="text-gray">生存技能</small>
                <div className="pt-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Gold 1"
                />
                <div className="py-1" />

                <small className="text-gray">物资消耗</small>
                <div className="pt-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Gold 2"
                />
                <div className="py-1" />

                <small className="text-gray">affe特殊物品</small>
                <div className="pt-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Master"
                />
                <div className="py-1" />

                <small className="text-gray">你快乐吗</small>
                <div className="pt-1" />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Challenger"
                />
                <div className="py-1" />
            </SimpleCard>
        </div>
    )
}

export default DailyTracker
