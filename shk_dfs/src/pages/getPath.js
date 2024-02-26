import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { Context } from '..';
import { fetchSpk, fetchSection, fetchManagers } from '../http/PathAPI';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';


const getPath = observer(() => {

  const {paths} = useContext(Context)
  const [selectedLabelSection, setSelectedLabelSection] = useState("Выберите раздел");
  const [selectedLabelSpk, setSelectedLabelSpk] = useState("Выберите подразделение");
  const home = "\\Gk.rosatrom.local\\shk_dfs"
  useEffect(() => {
    paths.setSpk([])
    fetchSection().then(data => paths.setSection(data))
  }, [])

  console.log(toJS(paths.spk))

  return (
    <div className= 'flex justify-center mt-10'>
      <div className='flex flex-col items-center'>
        <div className='mb-4'>
        <Dropdown label={selectedLabelSection} dismissOnClick={false}>
          {paths.section.map(data => (
            <Dropdown.Item onClick={() => {
              paths.setSelectedSection(data.id);
              setSelectedLabelSection(data.name);
              fetchSpk(paths.selectedSection).then(data => paths.setSpk(data));
            }} key={data.id}>
              {data.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
    </div>
    <div className='mb-4'>
      <Dropdown label={selectedLabelSpk} dismissOnClick={false}>
      {paths.spk.map(data => (
        <Dropdown.Item onClick={() => {
          paths.setSelectedSpk(data.subSectionId);
          setSelectedLabelSpk(data.subSection.name);
          fetchManagers(paths.selectedSection, paths.selectedSpk).then(data => paths.setManagers(data.folder))
        }} key={data.id}>
          {data.subSection.name}
        </Dropdown.Item>
      ))}
    </Dropdown>
    </div>
    <p className='mb-4'>Путь: {paths.managers.path ? `${home}\\${paths.managers.path}` : `${home}`} </p>
    {paths.managers.manager && <p className='mb-4'>Главная бухгалтерия: {paths.managers.manager.first_manager}</p>}
    {paths.managers.manager && <p className='mb-4'>Резервная бухгалтерия: {paths.managers.manager.second_manager}</p>}
    </div>
    </div>
  );
});

export default getPath;