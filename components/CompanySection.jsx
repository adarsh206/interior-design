import React from 'react'
import Badge from './Badge'

const CompanySection = () => {
  return (
    
        <div>
            <div>
                <dl>
                    {/** Badge 1 */}
                    <div>
                        <dt>
                            Transaction every 24 hours
                        </dt>
                        <dd>
                            <Badge />
                        </dd>
                    </div>
                  
                </dl>
            </div>
        </div>
    
  )
}

export default CompanySection