import React from 'react'
type Props = {
  head: [string, string, string]
  info?: {
    row1: any
    row2: never
    row3?: unknown
  }[]
}
export function Table({ head: headl, info: body }: Props) {
  return (
    <>
      <table>
        {headl.map(t => (
          <tr>
            <td>{t}</td>
          </tr>
        ))}
        <tbody>
          {body?.map(raw => {
            const raws = [raw.row1, raw.row2, raw.row2]

            return (
              <tr>
                {raws.map(a => <th>{a}</th>)}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}